 const shimmer_card_unit = 15; 
const menu_shimmer_card_card_unit = 30;
// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
};


export const MenuShimmer = () => {
  return (
    <>
    <div className="restaurant">
      <div className="restaurant_summary max-width flex">
      <img className="shimmer-img stroke animate" />
      <div className="restaurant_detail flex column">
      <h2 className="shimmer-w40  stroke animate"></h2>
          <p className="shimmer-w20 stroke animate"></p>
          <div className="shimmer-w60  stroke animate">
          </div>
      </div>
      </div>
    </div>
    <div className="menu-list max-width">
    {new Array(menu_shimmer_card_card_unit).fill("").map((element, index) =>(

          <div className="menu-list-items">
          <div className="menu_item flex">
          <img className="shimmer-img-wrapper stroke animate" />
          <div className="menu-name">
          <p className="shimmer-w60 stroke animate"></p>
          </div>
          <div className="menu-name">
          <p className="shimmer-w60 stroke animate"></p>
          </div>
          </div>

          </div>
    ))}
   
    </div>
    </>
  )
}
const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {new Array(shimmer_card_unit).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;