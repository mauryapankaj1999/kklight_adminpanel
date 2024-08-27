import Sidebar from '@/component/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import style from './page.module.scss'
import { redirect } from "next/navigation";
import { headers } from "next/headers";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <>
        <div className="row gx-0">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <div>{children}</div>
          </div>
      </div>
    </>
  );
}
