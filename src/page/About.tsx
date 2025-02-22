import { Mail, Phone, MapPin } from 'lucide-react';

const ContactCard = () => {
  return (
    <div className='min-h-screen'>
    <div className='flex justify-center'>
    <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center mb-4">
        <div className="w-24 h-24 overflow-hidden rounded-full mb-3">
          <img 
            src="https://avatars.githubusercontent.com/u/170225638?v=4"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Anusit Panpimsen</h2>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-gray-600">
          <Mail className="w-5 h-5 text-gray-400" />
          <a href="mailto:654234040@skru.ac.th" className="text-blue-600 hover:underline">
            654234040@skru.ac.th
          </a>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <Phone className="w-5 h-5 text-gray-400" />
          <a href="tel:082-000-0000" className="hover:underline">
            082-000-0000
          </a>
        </div>
        <div className="flex items-start gap-3 text-gray-600">
          <MapPin className="w-15 h-15 text-gray-400 mt-1" />
          <p className="font-kanit">
            คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยราชภัฏสงขลา 160 หมู่ 4 ถนน กาญจนวนิช ตำบลเขารูปช้าง อำเภอเมืองสงขลา จังหวัดสงขลา รหัสไปรษณีย์ 90000
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default ContactCard;