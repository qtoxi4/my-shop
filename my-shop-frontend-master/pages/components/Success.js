import Link from "next/link";

export default function Success() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-center">
          <div className="rounded-full bg-green-100 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-12 w-12 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">Оплата успішна</h2>
          <p className="text-gray-600 mt-2 max-w-sm">
            Ваше замовлення отримано та обробляється. Ми надішлемо вам електронний лист із детальнішою інформацією.
          </p>
          <Link href="/products"
             className="block mt-4 text-sm font-medium text-white bg-primary py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring"
             >
              Продовжити покупки
          </Link>
        </div>
      </div>
    </div>
  );
}
