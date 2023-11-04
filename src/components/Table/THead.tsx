type Field = {
  name: string
}

type THeadProps = {
  fields: Field[]
  lastFieldName: string
}

export function THead({ fields, lastFieldName }: THeadProps) {
  return (
    <thead className="flex border-b-2 border-zinc-400">
      <tr className="flex w-full p-3">
        {fields.map(field => (
          <th 
            key={field.name}
            className={`
              text-base 
              font-bold 
              text-zinc-200 
              w-full
              ${field.name === lastFieldName ? "text-center" : "text-start"}
            `}
          >
            {field.name}
          </th>
        ))}
      </tr>
    </thead>
  )
}