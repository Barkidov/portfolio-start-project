import iconsSprite from "../../assets/images/iconsColor-sprite.svg";

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    preserveAspectRatio?: string;
  };
  
  export const Icon = (props: IconPropsType) => {
    return (
      <svg
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio={props.preserveAspectRatio || "xMinYMid meet"}
      >
        <use href={`${iconsSprite}#${props.iconId}`} />
      </svg>
    );
  };
  
