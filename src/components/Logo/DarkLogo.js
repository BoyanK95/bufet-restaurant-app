import Image from "next/image";

function DarkLogo() {
    return <Image src='/assets/logo/bufet-logo-transperant.png' width={120} height={120} alt='Bufet-Logo' style={{zIndex: '100'}} priority={true} />;
}

export default DarkLogo;
