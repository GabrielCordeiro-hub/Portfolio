export function ProductPreview() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/30 p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Experience the future of web development
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our platform combines power and simplicity to help you build faster than ever before.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            {/* Visual placeholder for Product Preview */}
            <div className="aspect-video bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-1 flex items-center justify-center">
              <div className="w-full h-full rounded-xl border border-dashed border-primary/20 flex flex-col items-center justify-center gap-4">
                <div className="flex gap-2">
                   <div className="h-3 w-3 rounded-full bg-red-400" />
                   <div className="h-3 w-3 rounded-full bg-yellow-400" />
                   <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-primary">Interactive Dashboard Preview</p>
                  <p className="text-xs text-muted-foreground mt-1 text-balance max-w-xs">
                    This is where your stunning product interface would be showcased with high-quality screenshots or videos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
