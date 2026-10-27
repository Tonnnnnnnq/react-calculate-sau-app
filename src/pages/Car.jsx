import { Link } from "react-router";
 import car from "./../assets/car.png"; 

export default function Car() {
  return (
    <>
      <div className="w-[50%] border border-gray-300 mt-20 mx-auto rounded-2xl
                    p-10 flex flex-col items-center gap-3 shadow-2xl bg-white">
        {/* แสดงหัวเรื่องและรูป */}
        <h1 className="text-2xl font-bold text-gray-800">Car Installment Calculator</h1>
        <h3 className="text-lg text-gray-600 font-kanit">คำนวณ Car Installment</h3>
        {/* <img src={carImg} alt="car" className="w-25 h-25 object-contain" /> */}

        {/* ส่วนแสดงฟอร์มกรอกข้อมูล */}
        <form className="w-full flex flex-col gap-3 font-kanit">
          <p className="text-base">ชื่อผู้ทำแบบ:</p>
          <input 
            type="text" 
            placeholder="ชื่อผู้ทำแบบ" 
            className="border border-gray-300 p-2 rounded-md" 
          />

          <p className="text-base">ราคารรถ (บาท):</p>
          <input 
            type="number" 
            placeholder="ราคารรถ" 
            className="border border-gray-300 p-2 rounded-md" 
          />

          <p className="text-base">ดอกเบี้ยต่อปี (%):</p>
          <input 
            type="number" 
            placeholder="ดอกเบี้ยต่อปี" 
            className="border border-gray-300 p-2 rounded-md" 
          />

          <p className="text-base">เงินดาวน์ (%):</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="downPayment" value="15" /> 15%
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="downPayment" value="20" /> 20%
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="downPayment" value="25" /> 25%
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="downPayment" value="30" /> 30%
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="downPayment" value="35" /> 35%
            </label>
          </div>

          <p className="text-base">จำนวนเดือนที่ผ่อน:</p>
          <select className="border border-gray-300 p-2 rounded-md bg-white">
            <option value="24">24 เดือน</option>
            <option value="36">36 เดือน</option>
            <option value="48">48 เดือน</option>
            <option value="60">60 เดือน</option>
            <option value="72">72 เดือน</option>
            <option value="84">84 เดือน</option>
          </select>

          <div className="flex gap-2 mt-3">
            <button type="submit" className="w-1/2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 cursor-pointer font-semibold">
              คำนวณ
            </button>
            <button type="button" className="w-1/2 bg-gray-300 text-black p-2 rounded-md hover:bg-gray-400 cursor-pointer font-semibold">
              ล้างข้อมูล
            </button>
          </div>
        </form>

        {/* ส่วนแสดงผลลัพธ์ */}
        <div className="w-full flex justify-center items-center mt-3 font-kanit bg-gray-50 p-3 rounded-md border border-gray-200">
          <p className="text-gray-700">ผ่อนชำระต่อเดือน:</p>
          <p className="text-xl font-bold text-blue-800 ml-2">0.00 บาท</p>
        </div>

        {/* ส่วนแสดงลิงค์กลับไปหน้าหลัก */}
        <Link to="/" className="w-full text-center bg-gray-300 hover:bg-gray-700 hover:text-white p-2
                            rounded-md mt-4 font-kanit text-black transition">
          กลับไปหน้าหลัก
        </Link>
      </div>
    </>
  );
}