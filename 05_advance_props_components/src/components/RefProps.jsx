
import { useRef, forwardRef } from "react";

const CustomInput = forwardRef(({ label, placeholder, className = "" }, ref) => {
  return (
    <div className="mb-5">
      <label className="block text-sm font-semibold text-gray-600 mb-1.5">
        {label}
      </label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm transition ${className}`}
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

const buttons = [
  { label: "Focus First Input",    color: "bg-blue-500 hover:bg-blue-600",    action: "focusFirst"    },
  { label: "Focus Second Input",   color: "bg-purple-500 hover:bg-purple-600", action: "focusSecond"  },
  { label: "Get First Input Value", color: "bg-green-500 hover:bg-green-600",  action: "getValue"     },
  { label: "Clear First Input",    color: "bg-red-500 hover:bg-red-600",       action: "clear"        },
];

function RefProps() {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const handleAction = (action) => {
    switch (action) {
      case "focusFirst":
        inputRef.current?.focus();
        break;
      case "focusSecond":
        secondInputRef.current?.focus();
        break;
      case "getValue":
        if (inputRef.current)
          alert(`Input value: ${inputRef.current.value}`);
        break;
      case "clear":
        if (inputRef.current) {
          inputRef.current.value = "";
          inputRef.current.focus();
        }
        break;
    }
  };

  return (
    <section className="p-8 bg-white rounded-2xl shadow-lg max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Ref Props</h2>
        <p className="text-gray-500 text-sm mt-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam sint non
          quas eveniet possimus et!
        </p>
      </div>

      {/* Try it out box */}
      <div className="bg-blue-50 rounded-2xl p-6 mb-6">
        <h3 className="text-base font-bold text-gray-700 mb-4">Try it out:</h3>
        <CustomInput
          ref={inputRef}
          label="First Input (with ref)"
          placeholder="Type something..."
        />
        <CustomInput
          ref={secondInputRef}
          label="Second Input (with ref)"
          placeholder="Type something else..."
        />
        <div className="flex flex-wrap gap-3 mt-2">
          {buttons.map(({ label, color, action }) => (
            <button
              key={action}
              onClick={() => handleAction(action)}
              className={`px-4 py-2 rounded-xl text-white text-sm font-semibold transition-all shadow-sm ${color}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* When to use refs */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-5">
        <p className="text-sm font-bold text-gray-700 mb-3">When to use refs:</p>
        <ul className="space-y-1.5">
          {[
            "Managing focus, text selection, or media playback",
            "Triggering imperative animations",
            "Integrating with third-party DOM libraries",
            "Accessing DOM measurements (scroll position, element size)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default RefProps;