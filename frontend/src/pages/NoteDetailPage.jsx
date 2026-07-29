import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import { toast } from "react-hot-toast";
import { Loader2 as LoadIcon, ArrowLeft, Trash2 } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error fetching note:", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  // Save Changes
  const handleSave = async () => {
    try {
      setSaving(true);

      await api.put(`/notes/${id}`, {
        title: note.title,
        content: note.content,
      });

      toast.success("Note updated successfully");
    } catch (error) {
      console.log("Error updating note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  // Delete Note
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      setSaving(true);

      await api.delete(`/notes/${id}`);

      toast.success("Note deleted successfully");
      navigate("/");
    } catch (error) {
      console.log("Error deleting the note:", error);
      toast.error("Failed to delete note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoadIcon className="animate-spin size-10" />
      </div>
    );
  }

  if (!note) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold">Note not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">

          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Notes
            </Link>

            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline"
              disabled={saving}
            >
              <Trash2 className="h-5 w-5 mr-2" />
              {saving ? "Deleting..." : "Delete Note"}
            </button>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">

              <label className="label">
                <span className="label-text">Title</span>
              </label>

              <input
                type="text"
                value={note.title}
                onChange={(e) =>
                  setNote({ ...note, title: e.target.value })
                }
                className="input input-bordered w-full"
              />

              <label className="label mt-4">
                <span className="label-text">Content</span>
              </label>

              <textarea
                value={note.content}
                onChange={(e) =>
                  setNote({ ...note, content: e.target.value })
                }
                className="textarea textarea-bordered h-60"
              />

              <div className="card-actions justify-end mt-6">
                <button
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;