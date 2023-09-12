"use client";
import { ChangeEvent, useState } from "react";

export default function SighIn() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [saveName, setSaveName] = useState("");
  const [saveLastName, setSaveLastName] = useState("");
  const [saveEmail, setSaveEmail] = useState("");
  const [SaveCompany, setSaveCompany] = useState("");
  const [savePhone, setSavePhone] = useState("");
  const [saveMessage, setSaveMessage] = useState("");

  const handleGetName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleGetLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleGetEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleGetCompany = (e: ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  };

  const handleGetPhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleGetMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSaveUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSaveName(name);
    setSaveLastName(lastName);
    setSaveCompany(company);
    setSaveEmail(email);
    setSavePhone(phone);
    setSaveMessage(message);

    e.preventDefault();
    setName("");
    setLastName("");
    setEmail("");
    setCompany("");
    setPhone("");
    setMessage("");
  };

  return (
    <main className="bg-slate-50 text-gray-950">
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 ">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Crie seu contato
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nome
                  </label>
                  <input
                    maxLength={255}
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Seu nome "
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={name}
                    onChange={handleGetName}
                  />
                </div>

                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Sobrenome
                  </label>
                  <input
                    maxLength={255}
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Sobrenome "
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={lastName}
                    onChange={handleGetLastName}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Seu e-mail
                  </label>
                  <input
                    maxLength={255}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="email@gmail.com"
                    value={email}
                    onChange={handleGetEmail}
                  />
                </div>

                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Empresa
                  </label>
                  <input
                    maxLength={255}
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Sua empresa"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={company}
                    onChange={handleGetCompany}
                  />
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Telefone
                  </label>
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    maxLength={40}
                    placeholder="(99) 9999-9999"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={phone}
                    onChange={handleGetPhone}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white bg"
                  >
                    Deixe sua mensagem
                  </label>
                  <textarea
                    id="message"
                    className="m p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Deixe sua mensagem.."
                    value={message}
                    onChange={handleGetMessage}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={handleSaveUser}
                >
                  Salvar dados
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Já tem uma conta?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Entre aqui
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
