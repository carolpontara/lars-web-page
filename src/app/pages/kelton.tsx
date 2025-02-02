// "use client"
// import Link from 'next/link';
// import Image from 'next/image';

// export default function KeltonPage() {
//   return (
//     <main className="bg-gray-50 text-gray-800">
//       {/* Header */}
//       <header className="bg-gray-800 text-white py-12 md:py-16 shadow-lg">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Ícone LARS à esquerda */}
//           <div className="flex items-center space-x-4">
//             <Link href="/" className="flex items-center">
//               <img src="/lars-logo.png" alt="LARS Logo" className="h-12 md:h-16" />
//             </Link>
//           </div>
//           {/* Nome do Professor no centro */}
//           <div className="hidden md:flex items-center space-x-8">
//             <p className="text-sm md:text-base font-semibold">Kelton Costa, Ph.D.</p>
//           </div>
//         </div>
//       </header>

//       {/* Informações do Professor */}
//       <section className="container mx-auto p-6">
//         <div className="text-center">
//           <h2 className="text-3xl font-semibold mb-4">Kelton Costa, Ph.D.</h2>
//           <p className="text-lg mb-6">
//             Graduated in Systems Analysis from the Sagrado Coração University-USC, Master's Degree in Computer Science from the Euripides de Marilia University-UNIVEM, Ph.D. from São Paulo University-USP, Post-doctoral in Computer Networks by Campinas State University-UNICAMP and post-doctoral in Anomaly Detection in Computer Networks by São Paulo State University-UNESP.
//           </p>
//           <p className="text-lg mb-6">
//             Professor of Computer Science and Information Systems courses at UNESP (Bauru campus), with experience in Computer Science, focusing on Systems Architecture, Computing and Distributed Systems, especially on topics like Network Management, Cybersecurity, Anomaly Detection, and Data Flow Analysis in Networks.
//           </p>
//           <div className="flex justify-center gap-6">
//             <Link href="https://lattes.cnpq.br/0000-0001-5458-3908" target="_blank">
//               <Image src="/lattes-icon.png" alt="Curriculum Lattes" width={60} height={60} className="cursor-pointer hover:scale-110 transition-all" />
//             </Link>
//             <Link href="https://www.researchgate.net/profile/Kelton-Costa" target="_blank">
//               <Image src="/research-gate-icon.png" alt="ResearchGate" width={60} height={60} className="cursor-pointer hover:scale-110 transition-all" />
//             </Link>
//             <Link href="https://scholar.google.com/citations?user=PpZNWkYAAAAJ&hl=en" target="_blank">
//               <Image src="/google-scholar-icon.png" alt="Google Scholar" width={60} height={60} className="cursor-pointer hover:scale-110 transition-all" />
//             </Link>
//             <Link href="https://www.unesp.br/" target="_blank">
//               <Image src="/unesp-logo.png" alt="UNESP" width={60} height={60} className="cursor-pointer hover:scale-110 transition-all" />
//             </Link>
//             <Link href="https://bvcd.cdi.info.br" target="_blank">
//               <Image src="/bv-cdi-logo.png" alt="BV CDI" width={60} height={60} className="cursor-pointer hover:scale-110 transition-all" />
//             </Link>
//             <Link href="https://lars-unesp.com.br" target="_blank">
//               <Image src="/lars-logo.png" alt="LARS" width={60} height={60} className="cursor-pointer hover:scale-110 transition-all" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Research Projects */}
//       <section className="container mx-auto p-6 bg-gray-100">
//         <h3 className="text-2xl font-semibold text-center mb-4">Research Projects</h3>
//         <ul className="space-y-4 text-lg">
//           <li>
//             <p><strong>FAPESP Proc. 2023/12945-1</strong> - Impacts of Code Optimization on Noise Reduction and Performance Improvement of QML Models for Anomaly Detection in Computer Networks</p>
//             <p>2023 - current</p>
//           </li>
//           <li>
//             <p><strong>FAPESP Proc. 2023/12830-0</strong> - Quantum Intelligent Systems for Cybersecurity</p>
//             <p>2023 - current</p>
//           </li>
//           <li>
//             <p><strong>Petrobras Proc. 2017/00285-6</strong> - WISDOM Project</p>
//             <p>2023 - current</p>
//           </li>
//         </ul>
//       </section>

//       {/* Latest Publications */}
//       <section className="container mx-auto p-6">
//         <h3 className="text-2xl font-semibold text-center mb-4">Latest Publications</h3>
//         <p className="text-lg text-center mb-6">You can explore more of my latest works and publications on the platforms mentioned above.</p>
//       </section>

//       {/* Contact */}
//       <section className="container mx-auto p-6 bg-gray-100 text-center">
//         <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
//         <Link href="mailto:kelton@unesp.br" className="text-lg text-blue-500 hover:underline">Send an Email</Link>
//       </section>
//     </main>
//   );
// }
