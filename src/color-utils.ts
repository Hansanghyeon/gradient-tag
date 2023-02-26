/**
 * HEX 색상 값을 RGB 값으로 변환한다
 */
function hexToRgb(hex: string): number[] {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  return [r, g, b];
}

/**
 * 받아온 HEX 색상 값들의 평균 색상을 구한다
 */
export function getAverageColor(colorArray: string[]): number[] {
  let r = 0, g = 0, b = 0;

  for (let i = 0; i < colorArray.length; i++) {
    let color: string | number[] = colorArray[i];

    // 색상값을 RGB 값으로 변환
    if (color.charAt(0) === '#') {
      color = hexToRgb(color);
    } else if (color.indexOf('rgb') === 0) {
      color = color.match(/\d+/g)?.map(Number) || [0, 0, 0];
    }

    r += color[0] as number;
    g += color[1] as number;
    b += color[2] as number;
  }

  const total = colorArray.length;

  const avgR = Math.round(r / total);
  const avgG = Math.round(g / total);
  const avgB = Math.round(b / total);

  return [avgR, avgG, avgB];
}

/**
 * 평균 색상의 밝기를 기준으로 글자색을 결정합니다. 이를 위해, 평균 색상의 밝기가 일정 값 이상인 경우에는 글자색을 검정색으로, 그렇지 않은 경우에는 흰색으로 설정할 수 있습니다. 다음은 이를 구현한 코드입니다.
 * var textColor = (brightness > 125) ? 'black' : 'white'
 */
export function getBrightness(color: number[]): number {
  var r = color[0];
  var g = color[1];
  var b = color[2];

  var brightness = Math.round(((r * 299) + (g * 587) + (b * 114)) / 1000);

  return brightness;
}
