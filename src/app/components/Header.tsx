import Link from "next/link"
interface HeaderProps {
    font: {
      className: string;
    };
  }

export default function Header (data:HeaderProps){
    return(
        <div className="header">
            <div>
                <ul className={`${data.font.className} links`}>
                    <li className="link"><Link href={""}>Works</Link></li>
                    <li className="link"><Link href={""}>Blog</Link></li>
                    <li className="link"><Link href={""}>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}