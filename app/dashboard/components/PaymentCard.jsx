import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import visa from "../../../assets/dashboard/Visa.png";
import Image from "next/image";

const PaymentCard = ({ isSelected, onClick }) => {
  return (
    <section>
      <div>
        <div
          className={`flex justify-between px-4 py-2 border-2 mb-2 max-sm:text-xs items-center ${
            isSelected ? "border-green-500" : "border-[#E9EAF0]"
          }`}
          onClick={onClick}
          style={{ cursor: "pointer" }}
        >
          <Image src={visa} className="max-sm:w-[10%]" alt="Visa" />
          <p>4855 **** **** ****</p>
          <p>04/24</p>
          <p>Vako Shvili</p>
          <span
            className={`text-[#23BD33] transition-opacity duration-300 ${
              isSelected ? "opacity-100" : "opacity-0"
            }`}
          >
            <FaCircleCheck />
          </span>
        </div>
      
      </div>
    </section>
  );
};

export default PaymentCard;
