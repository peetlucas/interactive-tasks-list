import TasksList from "../components/TasksList";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-cyan-300 text-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full  bg-slate-800 rounded-lg p-8 shadow-lg">
        <div className="flex justify-center items-center mb-4">
          {/* <h1 className="text-2xl font-semibold mb-4">Tasks App</h1> */}
        </div>
        <TasksList />
      </div>
    </div>     
  );
}
