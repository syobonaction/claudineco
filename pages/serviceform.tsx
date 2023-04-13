import Header from '@/components/Header'

export default function Serviceform() {
  return (
    <>
        <Header></Header>
        <main className="w-11/12 border-gray-300 flex min-h-screen flex-col justify-between p-24">
            <form className="max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        First Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                    </div>
                </div>
            </form>
        </main>
    </> 
  )
}