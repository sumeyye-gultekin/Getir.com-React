export default function Category({ category: { title, id, image } }) {
  return (
    <a
      href="g"
      className="flex flex-col group items-center text-center gap-y-2 p-4
    transition hover:bg-purple-50
    "
    >
      <img
        src={image}
        alt="title"
        className="w-12 h-12 rounded border-gray-200 "
      />
      <span className="text-sm font-semibold  text-gray-600 group-hover:text-brand-color tracking-tight">
        {title}
      </span>
    </a>
  );
}