import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={300}
    height={200}
    viewBox="0 0 300 200"
    backgroundColor="#f1eddf"
    foregroundColor="#e3e3e3"
    {...props}
  >
    <rect x="-2" y="51" rx="3" ry="3" width="380" height="6" /> 
    <rect x="3" y="20" rx="3" ry="3" width="178" height="6" />
  </ContentLoader>
)

export default Skeleton