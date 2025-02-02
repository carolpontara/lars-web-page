"use client"
import Image from 'next/image';
import Link from 'next/dist/client/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white py-12 md:py-16 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
              <img src="/lars-logo.png" alt="LARS Logo" className="h-12 md:h-16" />
          </div>
          <div className="flex items-center space-x-8">
            {/* Link para a página do Kelton */}
            <div className="text-sm md:text-base font-semibold text-blue-500 hover:text-blue-400 transition-all">
              Kelton Costa, Ph.D.
            </div>
          </div>
        </div>
      </header>      <main className="flex-grow container mx-auto py-8">
        <section className="text-center mb-16 py-16">
          <div className="flex justify-center items-center gap-8 sm:gap-16 md:gap-24">
            <a href="https://www.fc.unesp.br/#!/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/unesp.png"
                alt="UNESP"
                width={200}
                height={260}
                className="object-contain cursor-pointer hover:scale-110 transition-transform w-40 sm:w-56 md:w-64"
              />
            </a>
            <a href="https://www.fc.unesp.br/#!/departamentos/computacao/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/faculdade-ciencias.png"
                alt="Faculdade de Ciências"
                width={220}
                height={220}
                className="object-contain cursor-pointer hover:scale-110 transition-transform w-40 sm:w-56 md:w-64"
              />
            </a>
            <a href="http://dgp.cnpq.br/dgp/espelhogrupo/4783223629631170" target="_blank" rel="noopener noreferrer">
              <Image
                src="/lattes.png"
                alt="Lattes"
                width={220}
                height={220}
                className="object-contain cursor-pointer hover:scale-110 transition-transform w-40 sm:w-56 md:w-64"
              />
            </a>
          </div>
        </section>

        <section className="text-center mb-16 py-16">
          <h1 className="text-5xl font-bold mb-6 uppercase tracking-wide">
            ADVANCED NETWORK AND SECURITY LAB UNESP BAURU - LARS
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto uppercase tracking-wide">
            The advanced search group in computer network security (LARS), aims at fostering the research in the context of computer network security. Our proposal is to seek for state-of-the-art research as well as to disseminate the passion for collaborative research and teaching.
          </p>
          <p className="text-xl font-semibold mt-6 uppercase tracking-wide">
            Av. Eng. Luís Edmundo Carrijo Coube, 14-01 · Bauru, SP 17033-360 · (14) 3103-6100 ·
            <a href="mailto:kelton.costa@unesp.br" className="text-blue-600 underline">
              kelton.costa@unesp.br
            </a>
          </p>
          <div className="flex justify-center mt-6 gap-8">
            <a href="https://scholar.google.com/citations?user=PpZNWkYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              <Image src="/google-scholar-icon.png" alt="Google Scholar" width={220} height={260} className="cursor-pointer hover:scale-110 transition-transform" />
            </a>
          </div>
        </section>


        <section className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-6">MAIN RESEARCHER</h2>
          <div className="flex justify-center items-center mb-4">
            <div className="relative w-52 h-52 overflow-hidden rounded-full">
              <Image src="/kelton.png" alt="Kelton Augusto Pontara da Costa" layout="fill" objectFit="cover" />
            </div>
          </div>
          <p className="text-lg font-semibold">PhD</p>
          <p className="text-lg">Department of Computing</p>
          <p className="text-lg">São Paulo State University</p>
          <p className="text-lg">Av. Eng. Luiz Edmundo Carrijo Coube, 14-01</p>
          <p className="text-lg">Cep 17033-360</p>
          <p className="text-lg">Bauru - SP - Brazil</p>
          <p className="text-lg font-semibold">IEEE Senior Membership</p>
          <div className="flex justify-center mt-4 gap-8">
            <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">
              <Image src="/ieee-logo.png" alt="IEEE" width={50} height={50} className="cursor-pointer hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/kelton-costa" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin-icon.jpg" alt="LinkedIn" width={30} height={30} className="cursor-pointer hover:scale-110 transition-transform" />
            </a>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-center">COLLABORATORS</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Rafał Scherer */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/rafal-scherer.png" alt="Rafał Scherer" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">PhD</p>
                <h3 className="font-semibold text-lg">Rafał Scherer</h3>
                <p className="text-lg">Czestochowa University of Technology, POLAND</p>
                <p className="text-lg">al. Armii Krajowej 36, 42-200 Częstochowa</p>
                <p className="text-lg">
                  <a href="mailto:rafal.scherer@pcz.pl" className="text-blue-600 underline">
                    rafal.scherer@pcz.pl
                  </a>
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <a href="https://kisi.pcz.pl/Rafal_Scherer/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Visit profile
                  </a>
                  <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">
                    <Image src="/ieee-logo.png" alt="IEEE" width={30} height={30} className="cursor-pointer hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://www.linkedin.com/in/rafalscherer/" target="_blank" rel="noopener noreferrer">
                    <Image src="/linkedin-icon.jpg" alt="LinkedIn" width={30} height={30} className="cursor-pointer hover:scale-110 transition-transform" />
                  </a>
                </div>
                <p className="text-lg">IEEE Senior Membership</p>
              </div>
            </div>

            {/* João Paulo Papa */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/joao-paulo-papa.png" alt="João Paulo Papa" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">PhD</p>
                <h3 className="font-semibold text-lg">João Paulo Papa</h3>
                <p className="text-lg">Department of Computing, São Paulo State University</p>
                <p className="text-lg">Av. Eng. Luiz Edmundo Carrijo Coube, 14-01, Cep 17033-360</p>
                <p className="text-lg">
                  <a href="https://www.recogna.tech" className="text-blue-600 underline">
                    Visit profile
                  </a>
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <a href="https://www.linkedin.com/in/jo%C3%A3o-paulo-papa-1a827923/" target="_blank" rel="noopener noreferrer">
                    <Image src="/linkedin-icon.jpg" alt="LinkedIn" width={30} height={30} className="cursor-pointer hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">
                    <Image src="/ieee-logo.png" alt="IEEE" width={30} height={30} className="cursor-pointer hover:scale-110 transition-transform" />
                  </a>
                </div>
                <p className="text-lg">IEEE Senior Membership</p>
              </div>
            </div>

            {/* Thiago José Lucas */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/thiago-lucas.png" alt="Thiago José Lucas" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">PhD</p>
                <h3 className="font-semibold text-lg">Thiago José Lucas</h3>
                <p className="text-lg">Department of Computing, Sao Paulo State College of Technology</p>
                <p className="text-lg">Av. Vitalina Marcusso, 1400, Ourinhos - SP - Brazil</p>
                <p className="text-lg">
                  <a href="https://thiago.fatecourinhos.edu.br" className="text-blue-600 underline">
                    Visit profile
                  </a>
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <a href="https://www.linkedin.com/in/thiagojoselucas/" target="_blank" rel="noopener noreferrer">
                    <Image src="/linkedin-icon.jpg" alt="LinkedIn" width={30} height={30} className="cursor-pointer hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-center">STUDENTS</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Vinicius Santos Andrade */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/vinicius-santos-andrade.png" alt="Vinicius Santos Andrade" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">Post-PhD</p>
                <h3 className="font-semibold text-lg">Vinicius Santos Andrade</h3>
                <p className="text-lg">
                  <a href="http://lattes.cnpq.br/2353938324822226" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            {/* Ricardo C. C. Silva */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/ricardo-cc-silva.png" alt="Ricardo C. C. Silva" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">PhD</p>
                <h3 className="font-semibold text-lg">Ricardo C. C. Silva</h3>
                <p className="text-lg">
                  <a href="http://lattes.cnpq.br/3928603949034761" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            {/* Miguel J. Das Neves */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/miguel-j-das-neves.png" alt="Miguel J. Das Neves" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">PhD</p>
                <h3 className="font-semibold text-lg">Miguel J. Das Neves</h3>
                <p className="text-lg">
                  <a href="http://lattes.cnpq.br/8690409469949449" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            {/* Paulo R. Gallego */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/paulo-r-gallego.png" alt="Paulo R. Gallego" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">PhD</p>
                <h3 className="font-semibold text-lg">Paulo R. Gallego</h3>
                <p className="text-lg">
                  <a href="http://lattes.cnpq.br/0618465832620216" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            {/* Carlos de Jesus Reis */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/carlos-de-jesus-reis.png" alt="Carlos de Jesus Reis" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">MASTER</p>
                <h3 className="font-semibold text-lg">Carlos de Jesus Reis</h3>
                <p className="text-lg">
                  <a href="http://lattes.cnpq.br/1082305520502531" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            {/* Milena de Toledo Araújo */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/milena-de-toledo-araujo.png" alt="Milena de Toledo Araújo" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">PIBIT - GRADUATION</p>
                <h3 className="font-semibold text-lg">Milena de Toledo Araújo</h3>
                <p className="text-lg">
                  <a href="http://lattes.cnpq.br/9611418266113854" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            {/* Weslley S. B. Rosalém */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/weslley-s-b-rosalem.png" alt="Weslley S. B. Rosalém" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">MASTER</p>
                <h3 className="font-semibold text-lg">Weslley S. B. Rosalém</h3>
                <p className="text-lg">
                  <a href="http://lattes.cnpq.br/5070784459753697" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            {/* Julia Franco Grimaldi */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/julia-franco-grimaldi.png" alt="Julia Franco Grimaldi" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">GRADUATION</p>
                <h3 className="font-semibold text-lg">Julia Franco Grimaldi</h3>
                <p className="text-lg">
                  <a href="http://lattes.cnpq.br/1578421079732976" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            {/* INÊA S. de Figueiredo */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/inae-s-de-figueiredo.png" alt="Inêa S. de Figueiredo" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">Master - CAPES</p>
                <h3 className="font-semibold text-lg">Inêa S. de Figueiredo</h3>
                <p className="text-lg">
                  <a href="http://lattes.cnpq.br/4254318957906892" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/fabricio-amoroso.png" alt="Fabricio Amoroso" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">MASTER</p>
                <h3 className="font-semibold text-lg">Fabricio Amoroso</h3>
                <p className="text-lg">
                  <a href="http://lattes.cnpq.br/2852196741004168" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            {/* Renato Leite Camilo */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/renato-leite-camilo.png" alt="Renato Leite Camilo" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">MASTER</p>
                <h3 className="font-semibold text-lg">Renato Leite Camilo</h3>
                <p className="text-lg">
                  <a href="http://lattes.cnpq.br/7902119454346690" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            {/* Vitor Hugo Parras */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/vitor-hugo-parras.png" alt="Vitor Hugo Parras" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">MASTER</p>
                <h3 className="font-semibold text-lg">Vitor Hugo Parras</h3>
                <p className="text-lg">
                  <a href="http://lattes.cnpq.br/8112168549772687" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            {/* Luiz Felipe Matosinho Silva */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/luiz-felipe-matosinho-silva.png" alt="Luiz Felipe Matosinho Silva" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">CTI - PIBIQ - Junior</p>
                <h3 className="font-semibold text-lg">Luiz Felipe Matosinho Silva</h3>
                <p className="text-lg">
                  <a href="http://lattes.cnpq.br/1107334236165264" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            {/* Arthur Pupolin Magalhães */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/arthur-pupolin-magalhaes.png" alt="Arthur Pupolin Magalhães" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">CTI - PIBIQ - Junior</p>
                <h3 className="font-semibold text-lg">Arthur Pupolin Magalhães</h3>
                <p className="text-lg">
                  <a href="http://lattes.cnpq.br/0923305809853195" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            {/* Fabio Carciofi Junior */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/fabio-carciofi-junior.png" alt="Fabio Carciofi Junior" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">GRADUATION</p>
                <h3 className="font-semibold text-lg">Fabio Carciofi Junior</h3>
                <p className="text-lg">
                  <a href="https://lattes.cnpq.br/6626876850302977" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            {/* Eduardo Alves Moraes */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/eduardo-alves-moraes.png" alt="Eduardo Alves Moraes" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">PHD</p>
                <h3 className="font-semibold text-lg">Eduardo Alves Moraes</h3>
                <p className="text-lg">
                  <a href="http://lattes.cnpq.br/9774565269857587" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            {/* Caua Picoli Mandotti */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/caua-picoli-mandotti.png" alt="Caua Picoli Mandotti" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">PIBIQ - Junior</p>
                <h3 className="font-semibold text-lg">Caua Picoli Mandotti</h3>
                <p className="text-lg">
                  <a href="https://lattes.cnpq.br/7794919000149088" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>

            {/* Carlos Alexandre Carvalho Tojeiro */}
            <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-72 p-6 border border-gray-300 rounded-lg shadow-md">
              <div className="relative w-32 h-32 overflow-hidden rounded-full mb-4">
                <Image src="/carlos-alexandre-carvalho-tojeiro.png" alt="Carlos Alexandre Carvalho Tojeiro" layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">MASTER</p>
                <h3 className="font-semibold text-lg">Carlos Alexandre Carvalho Tojeiro</h3>
                <p className="text-lg">
                  <a href="http://lattes.cnpq.br/8515776432692030" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Lattes Curriculum
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12 text-center">
          <a href="https://github.com/unesp-lars/source-papers" target="_blank" rel="noopener noreferrer">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image src="/git-hub.png" alt="GitHub Logo" layout="fill" objectFit="contain" />
            </div>
          </a>
          <h2 className="text-2xl font-semibold mb-4">
            Source paper (.tex) scientific works (codes and articles) published by the group
          </h2>
          <div className="flex justify-center">
            <div className="flex justify-center mt-6 gap-8">
              <a href="https://scholar.google.com/citations?user=PpZNWkYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <Image src="/google-scholar-icon.png" alt="Google Scholar" width={220} height={260} className="cursor-pointer hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <p className="text-center text-sm mt-4">Copyright © 2019 - All Rights Reserved</p>
      </footer>
    </div>
  );
}
