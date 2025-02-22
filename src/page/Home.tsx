import { menus } from "../data/MenuData"

function Home() {
  return (
    <>
        <div>
            {menus.map((menu) => (
                <div key={menu.id}>{menu.title}</div>
            ))}
        </div>
    </>
  );
}

export default Home;
