import { Input } from "@/components/ui/input";

export default function Home() {
	return (
		<div className="flex bg-gradient-to-b from-indigo-800 to-indigo-600 min-h-screen min-w-screen">
			<div className="flex flex-col justify-center items-center w-full">
				<span className="font-bold text-7xl">Project Battle AI</span>
				<div className="mt-12 space-y-4">
					<span className="font-bold text-3xl ">What&apos;s your name?</span>
					<Input
						type="username"
						id="username"
						placeholder="Username"
						className="placeholder:text-black placeholder:text-xl text-black text-xl p-6 bg-white border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,0.5)]"
					/>
				</div>
			</div>
		</div>
	);
}
