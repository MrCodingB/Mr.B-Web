import { Component } from "react";
import { Remark } from "react-remark";

export interface MarkdownTextProperties {
  text: string;
}

export default class MarkdownText extends Component<MarkdownTextProperties> {
  render() {
    return <Remark>{this.props.text}</Remark>;
  }
}
