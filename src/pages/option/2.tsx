import dynamic from "next/dynamic";
const CustomLottie = dynamic(
	() => import("@/components/CustomLottie.component"),
	{ ssr: false }
)

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
			<section
				id="section1"
				className='flex w-full h-screen justify-center items-center flex-col'
			>
				<div className='text-4xl text-white uppercase'>section 1</div>
				<p className='text-sm'>start animation only on scroll</p>
				<CustomLottie
					src="https://assets3.lottiefiles.com/packages/lf20_jeZMJEoXD0.json"
					loop
				/>
			</section>

			<section
				id="section2"
				className='flex w-full h-screen justify-center items-center flex-col'
			>
				<div className='text-4xl text-white uppercase'>section 2</div>
				<CustomLottie
					src="https://assets3.lottiefiles.com/packages/lf20_eSr9cajwxS.json"
					loop
				/>
			</section>

			<section
				id="section3"
				className='flex w-full h-screen justify-center items-center flex-col'
			>
				<div className='text-4xl text-white uppercase'>section 3</div>
				<CustomLottie
					src="https://assets9.lottiefiles.com/private_files/lf30_fpxjxaot.json"
					loop
				/>
			</section>

    </main>
  )
}
