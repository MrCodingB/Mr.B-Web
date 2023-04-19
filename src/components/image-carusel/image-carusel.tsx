import { Component } from "react";

import "./image-carusel.scss";

export interface ImageCaruselProperties {
  images: string[];
}

export interface ImageCaruselState {
  index: number;
}

export default class ImageCarusel extends Component<
  ImageCaruselProperties,
  ImageCaruselState
> {
  constructor(props: ImageCaruselProperties) {
    super(props);

    this.state = { index: 0 };
  }

  nextImage(): void {
    this.setState(({ index }, props) => {
      const newIndex = index + 1;

      return { index: newIndex >= props.images.length ? 0 : newIndex };
    });
  }

  previousImage(): void {
    this.setState(({ index }, props) => {
      const newIndex = index - 1;

      return { index: newIndex < 0 ? props.images.length - 1 : newIndex };
    });
  }

  render() {
    return (
      <div className="image-carusel">
        <img src={this.props.images[this.state.index]} alt="" />

        {this.props.images.length > 1 && (
          <>
            <button className="btn-previous" onClick={() => this.previousImage()}>
              <i className="bi bi-chevron-compact-left"></i>
            </button>

            <button className="btn-next" onClick={() => this.nextImage()}>
              <i className="bi bi-chevron-compact-right"></i>
            </button>
          </>
        )}
      </div>
    );
  }
}
