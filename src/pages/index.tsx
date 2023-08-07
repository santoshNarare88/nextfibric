import { useEffect, useRef } from "react";
import Image from "next/image";
import Mover from "../../public/images/mover.svg";
import { fabric } from "fabric";

const Home = () => {
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef<any>(null);
  const filed = ["title", "subTitle", "actors", "reviews"];

  useEffect(() => {
    fabricCanvasRef.current = new fabric.Canvas(canvasRef?.current);
    const rect = new fabric.Rect({
      top: 100,
      left: 100,
      width: 60,
      height: 70,
      fill: "red",
    });
    const rect1 = new fabric.Text("heelskdhskjd");
    fabricCanvasRef.current.add(rect);
    fabricCanvasRef.current.add(rect1);
  }, []);

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h4 className="m-0 font-bold text-3xl">NOVO TEMPLATE</h4>
        <div className="flex gap-5 items-center">
          <span className="font-semibold">GUARDAR</span>
          <button>PUBLICAR</button>
        </div>
      </div>
      <div className="templateGrid my-2">
        <div>
          {filed?.map((item, i) => {
            return (
              <div key={item + i} className="fields my-2">
                <p className="title">{item}</p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <label htmlFor={`${item}-fontFace`}>TAMANHO</label>
                    <select name={`${item}-fontFace`} id={`${item}-fontFace`}>
                      <option value="Arial, sans-serif">Arial</option>
                      <option value="Helvetica, sans-serif">Helvetica</option>
                      <option value="Times New Roman, serif">
                        Times New Roman
                      </option>
                      <option value="Georgia, serif">Georgia</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor={`${item}-fontSize`}>FONTE</label>
                    <select name={`${item}-fontSize`} id={`${item}-fontSize`}>
                      <option value="10">10</option>
                      <option value="12">12</option>
                      <option value="14">14</option>
                      <option value="16">16</option>
                      <option value="18">18</option>
                      <option value="20">20</option>
                      <option value="22">22</option>
                      <option value="24">24</option>
                      <option value="26">26</option>
                      <option value="28">28</option>
                      <option value="30">30</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor={`${item}-color`}>COR</label>
                    <input
                      defaultValue="#ffffff"
                      type="color"
                      id={`${item}-color`}
                      name={`${item}-color`}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>MOVER</label>
                    <Image src={Mover} alt="mover" className="mover" />
                  </div>
                </div>
                <hr className="mt-5" />
              </div>
            );
          })}
        </div>
        <div className="p-2">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
