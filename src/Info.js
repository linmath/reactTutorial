export default function Info() {
    const title = "Inventory System.";
    const showTitle = true;
    if (showTitle) {
      return (
        <div>
          <h1>
            {title}
          </h1>
          <p>Manage the stuff.</p>
        </div>
      );
    } else {
      return ( 
        <p>No title to be shown.</p>
      );
    }
  }