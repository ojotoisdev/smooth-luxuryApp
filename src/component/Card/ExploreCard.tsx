import styles from "./ExploreCard.module.css"; // ✅ import the CSS module

type ExploreCardProps = {
  icon: string;
  title: string;
  description: string;
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  marginLeft?: string | number;
  iconWidth?: string | number;
  iconHeight?: string | number;
  iconTitleSpacing?: string | number;
  titleDescriptionSpacing?: string | number;
  borderRadius?: string | number;
  backgroundColor?: string;
  className?: string; // allows you to pass .marginLeftCard
};

const ExploreCard = ({
  icon,
  title,
  description,
  width = 575,
  height = 448,
  marginLeft = 20,
  padding = 40,
  iconWidth = 60,
  iconHeight = 60,
  iconTitleSpacing = 20,
  titleDescriptionSpacing = 20,
  borderRadius = 24,
  backgroundColor = "#ffffff",
  className = "",
}: ExploreCardProps) => {
  return (
    <div
      className={`${styles.features} ${className}`} // ✅ use className prop
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        padding: typeof padding === "number" ? `${padding}px` : padding,
        borderRadius: typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius,
         marginLeft: typeof marginLeft === "number" ? `${marginLeft}px` : marginLeft,
        backgroundColor: backgroundColor,
        display: "flex",
        flexDirection: "column",
        opacity: 1,
        boxSizing: "border-box",
      }}
    >
      <img
        src={icon}
        alt={title}
        style={{
          marginBottom: iconTitleSpacing,
          width: typeof iconWidth === "number" ? `${iconWidth}px` : iconWidth,
          height: typeof iconHeight === "number" ? `${iconHeight}px` : iconHeight,
          objectFit: "contain",
        }}
      />
      <h1 className={styles.exploreCardTitle} style={{ marginBottom: titleDescriptionSpacing }}>
        {title}
      </h1>
      <p className={styles.exploreCardDescription}>{description}</p>
    </div>
  );
};

export default ExploreCard;
