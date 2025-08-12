import Head from "next/head";
import InstallationSteps from "@/src/components/products/InstallationSteps";
import AirDevice from "@/src/components/products/AirDevice";
export default function Temperature() {
  return (
    <>
      <Head>
        <title>Indoor Air Quality Monitoring</title>
      </Head>
      <AirDevice />
      <InstallationSteps />
    </>
  );
}
