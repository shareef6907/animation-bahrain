"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-client";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface HeroVideo {
  id: string;
  position: number;
  video_path: string;
  title: string;
  category: string;
  description: string;
  has_audio: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

function SortableRow({ video, onEdit }: { video: HeroVideo; onEdit: (v: HeroVideo) => void }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: video.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr ref={setNodeRef} style={style} className="border-b border-white/5 hover:bg-white/5">
      <td className="py-3 px-4 text-white/60 font-mono text-sm">
        <button {...attributes} {...listeners} className="cursor-grab text-white/40 hover:text-white/80 mr-2">
          ⠿
        </button>
        {String(video.position).padStart(2, "0")}
      </td>
      <td className="py-3 px-4">
        <video
          src={video.video_path}
          className="h-12 w-20 object-cover rounded bg-black"
          muted
        />
      </td>
      <td className="py-3 px-4 text-white font-medium">{video.title || "—"}</td>
      <td className="py-3 px-4 text-white/60 text-sm">{video.category || "—"}</td>
      <td className="py-3 px-4">
        {video.has_audio ? (
          <span className="text-green-400 text-xs">🔊 Yes</span>
        ) : (
          <span className="text-white/30 text-xs">🔇 No</span>
        )}
      </td>
      <td className="py-3 px-4">
        {video.is_active ? (
          <span className="text-green-400 text-xs">Active</span>
        ) : (
          <span className="text-red-400 text-xs">Inactive</span>
        )}
      </td>
      <td className="py-3 px-4">
        <button
          onClick={() => onEdit(video)}
          className="text-white/60 hover:text-white text-sm border border-white/20 hover:border-white/40 px-3 py-1 rounded transition-colors"
        >
          Edit
        </button>
      </td>
    </tr>
  );
}

function EditModal({
  video,
  onClose,
  onSave,
}: {
  video: HeroVideo;
  onClose: () => void;
  onSave: (v: HeroVideo) => void;
}) {
  const [form, setForm] = useState(video);
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    setSaving(true);
    const supabase = createClient();
    const { error } = await supabase
      .from("animation_bahrain_hero_videos")
      .update({
        title: form.title,
        category: form.category,
        description: form.description,
        has_audio: form.has_audio,
        is_active: form.is_active,
        updated_at: new Date().toISOString(),
      })
      .eq("id", form.id);

    setSaving(false);
    if (!error) {
      onSave(form);
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-night border border-white/10 rounded-lg w-full max-w-lg mx-4 p-6">
        <h2 className="text-xl font-bold text-white mb-6">Edit Video</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-white/60 text-xs mb-1 uppercase tracking-wider">Title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full bg-abyss border border-white/10 text-white rounded-md px-4 py-2 focus:outline-none focus:border-white/30"
            />
          </div>
          <div>
            <label className="block text-white/60 text-xs mb-1 uppercase tracking-wider">Category</label>
            <input
              type="text"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full bg-abyss border border-white/10 text-white rounded-md px-4 py-2 focus:outline-none focus:border-white/30"
            />
          </div>
          <div>
            <label className="block text-white/60 text-xs mb-1 uppercase tracking-wider">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={3}
              className="w-full bg-abyss border border-white/10 text-white rounded-md px-4 py-2 focus:outline-none focus:border-white/30 resize-none"
            />
          </div>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.has_audio}
                onChange={(e) => setForm({ ...form, has_audio: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="text-white text-sm">Has Audio</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.is_active}
                onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="text-white text-sm">Active</span>
            </label>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex-1 bg-white text-black font-semibold py-2 rounded-md hover:bg-white/90 transition-colors disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
          <button
            onClick={onClose}
            className="px-6 border border-white/20 text-white/80 py-2 rounded-md hover:bg-white/5 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminVideosPage() {
  const router = useRouter();
  const [videos, setVideos] = useState<HeroVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingVideo, setEditingVideo] = useState<HeroVideo | null>(null);
  const [signingOut, setSigningOut] = useState(false);

  const fetchVideos = useCallback(async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("animation_bahrain_hero_videos")
      .select("*")
      .order("position", { ascending: true });
    if (data) setVideos(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  async function handleSignOut() {
    setSigningOut(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin");
    router.refresh();
  }

  function handleSave(updated: HeroVideo) {
    setVideos((prev) =>
      prev.map((v) => (v.id === updated.id ? updated : v))
    );
  }

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = videos.findIndex((v) => v.id === active.id);
    const newIndex = videos.findIndex((v) => v.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;

    const reordered = [...videos];
    const [moved] = reordered.splice(oldIndex, 1);
    reordered.splice(newIndex, 0, moved);

    // Update position numbers
    const updates = reordered.map((v, i) => ({
      id: v.id,
      position: i + 1,
    }));
    setVideos(reordered.map((v, i) => ({ ...v, position: i + 1 })));

    // Persist to Supabase
    const supabase = createClient();
    for (const update of updates) {
      await supabase
        .from("animation_bahrain_hero_videos")
        .update({ position: update.position, updated_at: new Date().toISOString() })
        .eq("id", update.id);
    }
  }

  return (
    <div className="min-h-screen bg-abyss">
      {/* Header */}
      <header className="bg-night border-b border-white/10 px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">Hero Videos</h1>
          <p className="text-white/60 text-sm">Manage the homepage hero rotation</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleSignOut}
            disabled={signingOut}
            className="text-white/60 hover:text-white text-sm border border-white/20 hover:border-white/40 px-4 py-2 rounded-md transition-colors"
          >
            {signingOut ? "Signing out..." : "Sign Out"}
          </button>
        </div>
      </header>

      {/* Table */}
      <div className="p-8">
        {loading ? (
          <div className="text-white/60 text-center py-16">Loading...</div>
        ) : (
          <div className="bg-night border border-white/10 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th className="py-3 px-4 text-white/40 text-xs uppercase tracking-wider font-mono">#</th>
                    <th className="py-3 px-4 text-white/40 text-xs uppercase tracking-wider">Preview</th>
                    <th className="py-3 px-4 text-white/40 text-xs uppercase tracking-wider">Title</th>
                    <th className="py-3 px-4 text-white/40 text-xs uppercase tracking-wider">Category</th>
                    <th className="py-3 px-4 text-white/40 text-xs uppercase tracking-wider">Audio</th>
                    <th className="py-3 px-4 text-white/40 text-xs uppercase tracking-wider">Status</th>
                    <th className="py-3 px-4 text-white/40 text-xs uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={videos.map((v) => v.id)} strategy={horizontalListSortingStrategy}>
                      {videos.map((video) => (
                        <SortableRow
                          key={video.id}
                          video={video}
                          onEdit={setEditingVideo}
                        />
                      ))}
                    </SortableContext>
                  </DndContext>
                </tbody>
              </table>
            </div>
          </div>
        )}

        <p className="text-white/30 text-xs mt-4">
          Drag the ⠿ handle to reorder. Changes apply immediately.
        </p>
      </div>

      {/* Edit Modal */}
      {editingVideo && (
        <EditModal
          video={editingVideo}
          onClose={() => setEditingVideo(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
