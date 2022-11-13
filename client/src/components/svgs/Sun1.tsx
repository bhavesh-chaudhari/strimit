import * as React from "react";
import { SVGProps } from "react";
const SvgSun1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={534}
    height={534}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M268.685 352.007c-10.46 1.218-20.158-1.16-29.715-1.445-12.14-.361-21-6.467-30.421-11.515-9.357-5.013-12.186-15.518-15.504-25.108-5.104-14.754-6.43-29.597-5.201-45.334 2.036-26.089 15.596-44.21 34.88-60.095 9.084-7.483 17.933-8.843 28.89-6.762 5.005.951 10.854-.467 15.875-2.143 7.354-2.456 13.891-.942 20.709 1.534 9.736 3.536 19.665 6.549 29.376 10.15 3.552 1.318 7.39 3.032 9.937 5.68 9.587 9.964 19.044 20.099 27.853 30.745 5.422 6.551 5.85 15.482 4.514 23.127-1.633 9.348-5.737 18.365-9.532 27.2-2.364 5.501-6.179 10.373-9.261 15.576-9.242 15.603-23.98 23.956-40.302 29.821-10.192 3.664-20.395 7.721-32.098 8.569Zm16.061-145.345c-3.245-.368-6.487-.772-9.736-1.098-10.554-1.06-18.928 4.36-27.593 9.113-4.342 2.382-8.995 4.212-13.563 6.161-.876.374-2.013.137-3.03.182.254-.992.203-2.27.818-2.923 2.195-2.333 4.767-4.321 6.876-6.72.835-.95.832-2.635 1.21-3.985-1.255.176-2.811-.062-3.718.595-6.387 4.627-12.938 9.098-18.875 14.262-11.599 10.088-19.25 23.109-22.129 37.925-2.874 14.792-1.729 29.897 2.618 44.6 3.72 12.586 9.184 23.824 21.629 29.967 3.842 1.896 8.442 2.447 11.99 4.714 13.066 8.353 27.186 7.428 41.366 5.115 7.22-1.178 14.483-2.983 21.287-5.632 16.736-6.518 32.876-14.19 43.341-29.896 2.466-3.701 4.854-7.455 7.272-11.188 5.813-8.97 7.657-19.379 9.703-29.498.787-3.891.816-8.97-2.536-13.034-3.798-4.605-6.42-10.22-10.422-14.604-6.442-7.056-12.935-14.38-20.616-19.915-9.975-7.189-21.894-10.806-35.892-14.141ZM152.311 179.73c9.754 12.174 21.308 20.366 34.655 26.53 3.243 1.498 5.576 5.202 7.935 8.199.58.736.017 3.007-.763 3.974-.651.807-1.555 1.585-3.738.112-9.217-6.223-19.42-11.001-28.552-17.33-4.884-3.385-7.796-9.525-12.534-13.227-8.46-6.611-15.443-15.516-26.559-18.341-.537-.137-.931-.837-1.391-1.275.517-.362.99-.824 1.558-1.07a460.086 460.086 0 0 1 10.878-4.567c.343-.138 1.038.133 1.344.438 5.411 5.41 10.788 10.854 17.167 16.557Zm-45.622 98.556c12.759.2 24.526-.021 36.289.111 11.606.13 22.92-.83 33.648-5.843 1.377-.644 3.597.512 5.427.835-1.08 2.388-1.545 6.132-3.339 6.944-12.063 5.457-25.188 6.413-38.15 6.848-12.434.418-24.97-1.398-37.351-.573-4.451.297-5.586-1.044-6.115-3.828-.604-3.179 1.655-4.518 4.844-4.314 1.236.079 2.5-.285 4.747-.18Zm308.493 74.061c-12.532-3.111-21.673-10.666-31.934-16.015a553.437 553.437 0 0 1-19.379-10.572c-1.606-.92-3.281-2.358-4.034-3.972-1.132-2.429 1.506-5.274 4.09-4.38 5.582 1.932 11.372 3.672 16.447 6.586 13.502 7.753 26.638 16.137 39.988 24.157 4.113 2.47 8.605 4.332 12.599 6.963 1.623 1.069 2.382 3.445 3.533 5.227-2.058.106-4.463.951-6.109.18-4.896-2.295-9.493-5.225-15.201-8.174Zm-199.793-2.359c1.76 1.389 3.346 2.67 3.165 3.611-2.302 11.973-9.899 20.753-17.936 29.312-9.363 9.973-18.488 20.169-27.768 30.222a199.198 199.198 0 0 1-9.401 9.548c-.478.452-2.176.329-2.688-.168-.515-.501-.691-2.15-.258-2.685 1.798-2.223 4.351-3.937 5.781-6.34 7.356-12.366 17.493-22.545 26.264-33.79 5.46-6.999 11.519-13.532 16.952-20.55 2.133-2.755 3.292-6.262 5.889-9.16Zm197.917-175.479c-6.493 3.745-12.462 6.956-18.193 10.546-9.356 5.862-16.259 14.438-23.986 22.106-1.664 1.65-3.869 2.833-5.994 3.893-.601.299-2.497-.482-2.581-.974-.177-1.049.1-2.532.787-3.316 10.399-11.86 20.737-23.907 34.739-31.706 5.626-3.133 12.026-4.886 18.087-7.232 5.747-2.225 11.49-4.464 17.282-6.565 1.422-.516 3.03-.523 4.553-.763-.803 1.483-1.235 3.486-2.47 4.364-6.501 4.625-13.734 7.724-22.224 9.647Zm-119.98 234.685c1.061 9.112 2.514 17.213 3.565 25.366.136 1.057-1.625 2.673-2.874 3.414-.414.245-2.675-1.285-2.903-2.275-1.486-6.481-3.444-12.999-3.749-19.575-.666-14.364-1.399-28.6-6.734-42.211-.64-1.633-.392-4.072.392-5.674.773-1.579 2.751-2.569 4.2-3.817.805 1.459 1.708 2.873 2.4 4.383 5.297 11.571 4.028 24.367 6.707 36.433.198.89-.471 1.971-1.004 3.956Zm-15.57-291.741c1.862-6.944 3.386-12.914 5.121-18.822.297-1.012 1.492-1.76 2.272-2.631.54 1.25 1.793 2.7 1.506 3.717-2.335 8.288-3.457 16.484-2.588 25.252 1.064 10.73.562 21.612.807 32.427.258 11.425-5.13 20.559-11.924 29.039-.714.89-2.944.568-4.47.809.498-1.328.78-2.793 1.527-3.961 6.92-10.801 10.279-22.084 8.358-35.301-1.316-9.054.027-18.491.106-27.758.005-.59-.639-1.185-.715-2.771Zm-96.434 208.505c-2.493 8.423-9.576 12.154-13.665 18.208-.638.945-4.222.289-6.241-.31-.633-.188-1.307-3.031-.764-3.952 5.037-8.543 12.213-14.957 20.77-19.884.055 1.648.111 3.296-.1 5.938Zm45.414-145.477c.01 2.515.286 4.035.562 5.556-1.265-.01-2.672.323-3.753-.127-1.079-.449-2.257-1.524-2.657-2.598-2.788-7.488-5.518-15.006-7.903-22.627-.364-1.162 1.148-2.91 1.793-4.387 1.22.851 2.761 1.461 3.608 2.591 4.589 6.123 6.813 13.284 8.35 21.592Zm28.038 211.471c-1.664.516-3.395 1.116-3.626.755-4.712-7.347-2.822-15.991-4.397-23.982-.114-.579 1.784-1.926 2.928-2.227.594-.156 2.086 1.062 2.315 1.894 1.33 4.848 2.642 9.726 3.475 14.675.464 2.759-.012 5.675-.695 8.885Zm73.371-33.082c5.734-4.558 9.137.328 12.218 2.868 2.44 2.012 3.107 6.325 4.204 9.731.396 1.231-.246 2.796-.415 4.209-1.538-.485-3.601-.503-4.522-1.536-4.095-4.601-7.864-9.492-11.485-15.272Zm-9.32-165.985c3.052-7.595 9.753-12.816 10.572-21.201.055-.566 1.398-1.473 2.039-1.393.743.093 1.816.999 1.983 1.727 1.627 7.119-3.425 18.415-10.175 22.363-.881.515-2.681-.539-4.419-1.496Zm82.794 74.885c-2.521 7.066-8.559 4.701-12.756 6.213-2.416.871-5.767-.685-8.62-1.44-.287-.076-.165-3.182-.014-3.201 7.208-.934 13.711-8.187 21.39-1.572Zm-235.173-37.392c1.934.284 2.914.136 3.806.353 2.113.513 4.185 1.199 6.273 1.815-1.596 1.879-3.033 3.939-4.865 5.553-.775.682-2.377.441-3.608.588-4.752.568-5.68-.47-4.474-5.358.286-1.156 1.231-2.149 2.868-2.951Zm226.966-61.195-3.099 1.788-.057-3.327c1.262.392 2.524.783 3.156 1.539Z"
      fill="#EB5D1E"
    />
    <path
      d="M255.5 311.732c-6.774-1.733-13.606-2.389-15.795-8.842-2.216-6.531-2.868-13.608-3.953-20.486-.142-.903 1.207-2.042 1.865-3.072.514.889 1.165 1.727 1.518 2.676 1.918 5.156 3.399 10.519 5.808 15.429.984 2.008 3.813 3.255 6.009 4.478 1.451.807 3.374.729 4.907 1.435 7.138 3.286 13.678 2.583 19.86-2.352 1.007-.803 2.658-.801 4.011-1.171-.472 1.542-.463 3.749-1.505 4.503-3.265 2.359-6.735 4.714-10.49 6.035-3.504 1.233-7.475 1.142-12.235 1.367Zm26.231-52.09c-.723-2.663-1.081-4.697-1.439-6.73 1.931.324 4.379.044 5.658 1.133 1.448 1.233 3.066 4.61 2.448 5.43-1.256 1.668-3.759 4.471-6.667.167Zm-22.318-2.247c-3.234 1.962-4.37.489-5.102-1.605-1.057-3.024.01-5.299 3.017-6.308.617-.208 2.152.729 2.455 1.47.866 2.11 4.497 4.14-.37 6.443Zm4.642 28.403c-4.429 3.468-6.17.566-6.972-2.346-.261-.952 2.08-3.647 3.459-3.83 4.303-.571 4.449 2.637 3.513 6.176Z"
      fill="#EB5D1E"
    />
  </svg>
);
export default SvgSun1;
