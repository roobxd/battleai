import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex bg-blue-500 min-h-screen min-w-screen">
			<div className="flex flex-col justify-center items-center w-full">
				<span className="font-bold text-7xl">Project Battle AI</span>
				<div className="mt-12 space-y-4">
					<span className="font-bold text-3xl">What's your name?</span>
					<Input type="username" id="username" placeholder="Username" className="placeholder:text-white border-2 placeholder:font-semibold"/>
				</div>
			</div>

		</div>
	);
}
