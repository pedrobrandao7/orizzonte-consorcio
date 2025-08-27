import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-center">
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Sobre</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Termos & Condições</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licença</a>
                </li>
                <li>
                    <a href="/contato" className="hover:underline">Contato</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a target="_blank" href="https://instagram.com/orizzonteconsorcio" className="hover:underline">Orizzonte Consócio ™</a>. Todos os direitos reservados.</span>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a target="_blank" href="https://instagram.com/p.brandaoo__" className="hover:underline">Site desenvolvido por Pedro H. Brandão</a></span>
    </div>
</footer>
  )
}

export default Footer