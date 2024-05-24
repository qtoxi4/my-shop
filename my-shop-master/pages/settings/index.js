import { signOut, useSession } from "next-auth/react"
import Image from "next/image";
import { useRouter } from "next/router";

export default function Settings() {
  const { data: session } = useSession();
  const router = useRouter();
  async function logout() {
    await router.push('/');
    await signOut();
  }
  if (session) {
    return (
      <div className="my-10 p-4">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Профіль</h2>
            <p className="mt-1 text-md leading-6 text-gray-600">
              Ця інформація відображатиметься лише вам.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-md font-medium leading-6 text-gray-900">
                  Ім'я користувача
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-md">admin.com/</span>
                    <input
                      type="text"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-md sm:leading-6"
                      value={session.user.name}
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-md font-medium leading-6 text-gray-900">
                  Про
                </label>

                <p className="mt-3 text-md leading-6 text-gray-600">Ви один із адміністраторів цієї інформаційної панелі.</p>
              </div>

              <div className="col-span-full">
                <label htmlFor="photo" className="block text-md font-medium leading-6 text-gray-900">
                  Фото
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <div className="w-10 h-10">
                    <Image class="h-full w-full rounded-full object-contain object-center" src={session.user.image} alt={session.user.email} width={34} height={34} />
                  </div>

                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Змінити
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Персональна інформація</h2>
            <p className="mt-1 text-md leading-6 text-gray-600">Ви можете лише переглядати свою інформацію, ви не зможете її редагувати.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
                  Ім'я
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 pl-6"
                    value={session.user.name.split(' ')[0]}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-md font-medium leading-6 text-gray-900">
                  Фамілія
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 pl-6"
                    value={session.user.name.split(' ')[1]}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900">
                  Email 
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 pl-6"
                    value={session.user.email}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={logout}
            className="rounded-md bg-green-600 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Вийти
          </button>
        </div>
      </div>
    )
  }
}
