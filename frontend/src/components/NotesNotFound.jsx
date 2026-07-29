import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
 return (
 <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
 <div className="bg- #B23A3A/10 rounded-full p-8">
 <NotebookIcon className="size-10 text- #B23A3A" />
 </div>
 <h3 className="text-2xl font-bold">No notes yet</h3>
 <p className="text-base-content/70">
 Ready to organize your thoughts? Create your first note to get started on your journey.
 </p>
 <Link
 to="/create"
 className="btn text-white border-none hover:bg- #8C2E2E rounded-xl font-medium px-6 py-2"
 style={{ backgroundColor: "#780000" }}
 >
 Create Your First Note
 </Link>
 </div>
 );
};

export default NotesNotFound;