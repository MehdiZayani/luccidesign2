import Footeronly from './footeronly';
// import Map from './map';
import styles from'../styles/footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return(
        <div className={styles.mainfooter}>
            <footer className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-center text-black-600 text-3xl sm:justify-start">
                            <h1>LUCCI DESIGN</h1>
                        </div>

                        <p
                        className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left"
                        >
                            Le Concepteur de vos envies !
                        </p>

                        <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                        <li>
                            <a
                            href="https://www.facebook.com/luccizayani/"
                            rel="noreferrer"
                            target="_blank"
                            className="text-red-700 transition hover:text-red-700/75"
                            >
                            <span className="sr-only">Facebook</span>
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                                />
                            </svg>
                            </a>
                        </li>

                        <li>
                            <a
                            href="https://www.instagram.com/luccidesign_?igsh=cTVpc2tvOWUxcHp3"
                            rel="noreferrer"
                            target="_blank"
                            className="text-red-700 transition hover:text-red-700/75"
                            >
                            <span className="sr-only">Instagram</span>
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                fillRule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clipRule="evenodd"
                                />
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.tiktok.com/@lluccidesign'>
                                <svg fill="#b91c1c" width="25px" height="25px" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg"><path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/></svg>
                            </a>
                        </li>
                        </ul>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2"
                    >
                        <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900">A PROPOS DE NOUS</p>

                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="/"
                            >
                                Qui sommes-nous
                            </a>
                            </li>

                            <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="/contact"
                            >
                                Contact
                            </a>
                            </li>

                            <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="/"
                            >
                                Nos réalisations
                            </a>
                            </li>

                            <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="/"
                            >
                                Careers
                            </a>
                            </li>
                        </ul>
                        </div>

                        <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900">PRODUITS</p>

                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="/cuisine"
                            >
                                Cuisines
                            </a>
                            </li>

                            <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="/dressing"
                            >
                                Dressings/ Rangements
                            </a>
                            </li>

                            <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="/"
                            >
                                Portes
                            </a>
                            </li>

                            <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="/"
                            >
                                Lits Et Table De Nuit
                            </a>
                            </li>
                        </ul>
                        </div>

                        <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900">LIENS UTILES</p>

                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="/"
                            >
                                FAQs
                            </a>
                            </li>

                            <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="/"
                            >
                                Support
                            </a>
                            </li>

                            <li>
                            <a
                                className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                href="/">
                            </a>
                            </li>
                        </ul>
                        </div>

                        <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900">NOUS TROUVER</p>

                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                            <a
                                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                href="/"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 text-gray-900"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                                </svg>

                                <span className="flex-1 text-gray-700">contact@lucci.tn</span>
                            </a>
                            </li>

                            <li>
                            <a
                                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                href="/"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 text-gray-900"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                                </svg>

                                <span className="flex-1 text-gray-700">(+216) 98 400 083</span>
                            </a>
                            </li>

                            <li
                            className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 text-gray-900"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>

                            <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                            Rond point zini film, 2035 Sousse
                            </address>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    <div className="mt-12 border-t border-gray-100 pt-6">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="text-sm text-gray-500">
                        <span className="block sm:inline">All rights reserved.</span>

                        <a
                            className="inline-block text-red-600 underline transition hover:text-red-600/75"
                            href="/"
                        >
                            Terms & Conditions
                        </a>

                        <span>&middot;</span>

                        <a
                            className="inline-block text-red-600 underline transition hover:text-red-600/75"
                            href="/"
                        >
                            Privacy Policy
                        </a>
                        </p>

                        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                        &copy; {currentYear} Badi Corp.
                        </p>
                    </div>
                    </div>
                </div>
                </footer>
        </div>
    )
}