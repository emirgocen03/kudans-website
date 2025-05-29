import Image from 'next/image';
import BoardMemberCard from './components/BoardMemberCard';
import { executiveBoard, departmentCoordinators, danceStyleCoordinators } from './data';

export const metadata = {
  title: 'Board of Directors | KUDANS - Koç University Dance Club',
  description: 'Meet the KUDANS Board of Directors - the team behind Koç University Dance Club',
};

export default function BoardPage() {
  return (
    <div className="min-h-screen py-12 bg-black text-white">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Board of Directors
        </h1>
        <p className="text-xl text-gray-400 mb-12 text-center">
          Meet the dedicated team leading KUDANS for the 2024-2025 academic year
        </p>
        
        {/* Executive Board */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Executive Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveBoard.map((member) => (
              <BoardMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
        
        {/* Department Coordinators */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Department Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departmentCoordinators.map((member) => (
              <BoardMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
        
        {/* Dance Style Coordinators */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Dance Style Coordinators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {danceStyleCoordinators.map((member) => (
              <BoardMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 