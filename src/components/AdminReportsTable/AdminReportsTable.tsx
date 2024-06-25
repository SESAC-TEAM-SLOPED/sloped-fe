import { useLocation } from "react-router-dom";

type Props = {
  data: any[];
};

const AdminReportsTable = ({ data }: Props) => {
  const { pathname } = useLocation();

  if (pathname.includes("facility")) {
    return (
      <table className="border-collapse table-auto">
        <thead>
          <tr className="bg-[#3F51B5] text-white h-14">
            <th className="border-y">시설명</th>
            <th className="border-y">시설 구분</th>
            <th className="border-y">제보 내용</th>
            <th className="border-y">제보 등록자</th>
            <th className="border-y">승인 상태</th>
            <th className="border-y">생성/수정 일시</th>
          </tr>
        </thead>
        <tbody>
          {data.map((report) => (
            <tr key={report.id} className="hover:bg-[#F5F5F5] h-14">
              <td className="border-y px-10">{report.name}</td>
              <td className="border-y px-10">{report.type}</td>
              <td className="border-y px-10">{report.description}</td>
              <td className="border-y px-10">{report.informerEmail}</td>
              <td className="border-y px-10">{report.status}</td>
              <td className="border-y px-10">
                {report.createdAt} / {report.updatedAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return <table></table>;
  }
};

export default AdminReportsTable;
