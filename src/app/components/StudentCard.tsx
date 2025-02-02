interface StudentCardProps {
    name: string;
    role: string;
    lattes: string;
  }
  
  export function StudentCard({ name, role, lattes }: StudentCardProps) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 text-center">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{role}</p>
        <a
          href={lattes}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View Lattes
        </a>
      </div>
    );
  }
  