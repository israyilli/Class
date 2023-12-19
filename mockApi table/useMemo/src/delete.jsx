import { renderToStaticMarkup } from "react-dom/server";

<SweetAlert
  show={this.state.show}
  title="Demo"
  html
  text={renderToStaticMarkup(<HelloWorld />)}
  onConfirm={() => this.setState({ show: false })}
/>;
