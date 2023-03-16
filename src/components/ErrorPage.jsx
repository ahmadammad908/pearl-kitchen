import { BiError } from "react-icons/bi";
export default function ErrorPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{ fontSize: "100px", display: "flex", alignItems: "center" }}
        >
          <BiError />
          Page Not Found( Error)
        </h1>
      </div>
    </>
  );
}
