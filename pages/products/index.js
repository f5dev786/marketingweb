import AirDevice from "@/src/components/products/AirDevice";
import InstallationSteps from "@/src/components/products/InstallationSteps";
import LiquidDevice from "@/src/components/products/LiquidDevice";
import TempDevice from "@/src/components/products/TempDevice";

export default function Product() {
  return (
    <div
      style={{
        fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
      }}
    >
      <TempDevice />
      <AirDevice />
      <LiquidDevice />
      <InstallationSteps />
    </div>
  );
}
