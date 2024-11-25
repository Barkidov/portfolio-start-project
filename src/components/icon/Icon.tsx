import iconsSprite from "../../assets/images/icons-sprite.svg";

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    preserveAspectRatio?: string;
    maxWidth?: string;
  };
  
  export const Icon: React.FC<IconPropsType> = (props) => {
    return (
      <svg
        width={props.width}
        max-width={props.maxWidth}
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
  
