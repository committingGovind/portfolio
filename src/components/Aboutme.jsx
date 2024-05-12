import { Datacard } from "./Datacard";
import { LeftComponenent } from "./LeftComponent";

export function Aboutme() {
  return (
    <div className="flex justify-between">
      <div className="bg-gray-500 h-lvh w-lvw">
        <LeftComponenent />
      </div>
      <div className="bg-gray-800 h-lvh w-lvw">hwllo world</div>
    </div>
  );
}
