import { Link } from "react-router";
import bmi from "./../assets/bmi.png";
 
export default function Bmr() {
  return (
    <>
      <div className="w-[50%] border border-gray-300 mt-30 mx-auto rounded-2xl
                    p-10 flex flex-col items-center gap-3 shadow-2xl">
        {/* แสดงหัวเรื่องและรูป  */}
        <h1 className="text-2xl font-bold text-blue-800">BMR Calculator</h1>
        <h3 className="text-xl text-gray-600">คำนวณ BMR</h3>
        <img src={bmi} alt="bmr" className="w-25 h-25" />
 
        {/* ส่วนแสดงฟอร์มกรอกข้อมูล */}
        <form className="w-full flex flex-col gap-3">
          <p className="text-lg font-kanit">เลือกเพศ:</p>
          <div className="flex gap-4 font-kanit">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="gender" value="male" />
              ชาย
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="gender" value="female" />
              หญิง
            </label>
          </div>

          <p className="text-lg font-kanit">ป้อนอายุ (ปี):</p>
          <input 
            type="number" 
            placeholder="อายุ" 
            className="border border-gray-300 p-2 rounded-md" 
          />

          <p className="text-lg font-kanit">ป้อนน้ำหนัก (kg):</p>
          <input 
            type="number" 
            placeholder="น้ำหนัก" 
            className="border border-gray-300 p-2 rounded-md" 
          />

          <p className="text-lg font-kanit">ป้อนส่วนสูง (cm):</p>
          <input 
            type="number" 
            placeholder="ส่วนสูง" 
            className="border border-gray-300 p-2 rounded-md" 
          />

          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md
                      mt-3 hover:bg-blue-700 cursor-pointer">
            คำนวณ
          </button>
          <button type="button" className="bg-gray-300 text-black p-2 rounded-md
                      mt-1 hover:bg-gray-700 hover:text-white cursor-pointer transition">
            รีเซ็ต
          </button>
        </form>
 
        {/* ส่วนแสดงผลลัพธ์ */}
        <div className="w-full flex justify-center items-center mt-2 font-kanit">
          <p>ค่า BMR ที่คำนวณได้:</p>
          <p className="text-xl font-bold text-blue-800 ml-2 font-kanit">0.00</p>
        </div>
 
        {/* ส่วนแสดงลิงค์กลับไปหน้าหลัก */}
        <Link to="/" className="w-full text-center bg-gray-300 hover:bg-gray-700 hover:text-white p-2
                            rounded-md mt-5 font-kanit text-black transition">
          กลับไปหน้าหลัก
        </Link>
      </div>
    </>
  )
}