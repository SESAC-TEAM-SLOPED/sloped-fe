import { useLocation } from "react-router-dom";

type Props = {
  data: any[];
};

const AdminReportsTable = ({ data }: Props) => {
  const { pathname } = useLocation();

  if (pathname.includes("facility")) {
    return (
      <table className="border-collapse text-sm table-fixed w-full">
        <thead>
          <tr className="bg-[#3F51B5] text-white h-14">
            <th className="border-y">시설명</th>
            <th className="border-y w-[100px]">시설 구분</th>
            <th className="border-y w-[300px]">제보 내용</th>
            <th className="border-y">제보 등록자</th>
            <th className="border-y">승인 상태</th>
            <th className="border-y">생성/수정 일시</th>
          </tr>
        </thead>
        <tbody>
          {data.map((report) => (
            <tr key={report.id} className="hover:bg-[#F5F5F5] h-14">
              <td className="border-y px-8 text-center">{report.name}</td>
              <td className="border-y px-6 text-center">{report.type}</td>
              <td className="border-y px-8 truncate">{report.description}</td>
              <td className="border-y px-8 text-center">
                {report.informerEmail}
              </td>
              <td className="border-y px-8 text-center">{report.status}</td>
              <td className="border-y px-8 text-center">
                {report.createdAt} / {report.updatedAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return (
      <table className="border-collapse text-sm table-fixed w-full">
        <thead>
          <tr className="bg-[#3F51B5] text-white h-14">
            <th className="border-y">주소</th>
            <th className="border-y w-[300px]">제보 내용</th>
            <th className="border-y">제보 등록자</th>
            <th className="border-y">승인 상태</th>
            <th className="border-y">생성/수정 일시</th>
          </tr>
        </thead>
        <tbody>
          {data.map((report) => (
            <tr key={report.id} className="hover:bg-[#F5F5F5] h-14">
              <td className="border-y px-8 text-center">{report.address}</td>
              <td className="border-y px-8 truncate">{report.description}</td>
              <td className="border-y px-8 text-center">
                {report.informerEmail}
              </td>
              <td className="border-y px-8 text-center">{report.status}</td>
              <td className="border-y px-8 text-center">
                {report.createdAt} / {report.updatedAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default AdminReportsTable;
