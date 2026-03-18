import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Contact Manager</h1>
        <p className="mt-2 text-lg text-gray-600">
          Manage your contacts easily and efficiently
        </p>
        <Image 
          src="/contact.png"
          alt="Contacts"
          width={500}
          height={400}
          className="rounded-lg shadow-lg mx-auto my-4"
        />
      </div>
      <div className="text-center">
        <p className="mt-2 text-lg text-gray-600">
          Start managing your contacts today!
        </p>
      </div>
    </section>
  );
}
