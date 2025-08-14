Compiled with problems:
×
ERROR in src/components/ui/calendar.tsx:63:9
TS2322: Type '({ orientation, ...props }: { [key: string]: any; orientation?: "left" | "right" | undefined; }) => JSX.Element' is not assignable to type '(props: { className?: string | undefined; size?: number | undefined; disabled?: boolean | undefined; orientation?: "left" | "right" | "up" | "down" | undefined; }) => Element'.
  Types of parameters '__0' and 'props' are incompatible.
    Type '{ className?: string | undefined; size?: number | undefined; disabled?: boolean | undefined; orientation?: "left" | "right" | "up" | "down" | undefined; }' is not assignable to type '{ [key: string]: any; orientation?: "left" | "right" | undefined; }'.
      Types of property 'orientation' are incompatible.
        Type '"left" | "right" | "up" | "down" | undefined' is not assignable to type '"left" | "right" | undefined'.
          Type '"up"' is not assignable to type '"left" | "right" | undefined'.
    61 |       }}
    62 |       components={{
  > 63 |         Chevron: ({ orientation, ...props }: { orientation?: 'left' | 'right'; [key: string]: any }) => {
       |         ^^^^^^^
    64 |           const Icon = orientation === 'left' ? ChevronLeft : ChevronRight;
    65 |           return <Icon className="size-4" {...props} />;
    66 |         },