const bars = [34, 52, 41, 68, 55, 79, 62, 88, 71, 94, 83, 100];
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export default function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[var(--shadow-elevated)]">
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/80 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="mx-auto flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] text-ink-soft ring-1 ring-gray-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          app.zyra
        </span>
      </div>

      <div className="grid grid-cols-12">
        <aside className="col-span-3 hidden border-r border-gray-100 bg-gray-50/40 p-4 sm:block">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-brand-500 text-[11px] font-bold text-white">
              Z
            </span>
            <span className="text-xs font-semibold text-ink">Zyra</span>
          </div>
          <nav className="mt-5 space-y-1">
            {["Visão geral", "Operação", "Oportunidades", "Estratégia", "Resultados"].map(
              (item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] ${
                    i === 0 ? "bg-white font-semibold text-ink shadow-sm" : "text-ink-soft"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-brand-500" : "bg-gray-300"}`}
                  />
                  {item}
                </div>
              )
            )}
          </nav>
        </aside>

        <div className="col-span-12 p-4 sm:col-span-9 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-medium text-ink-soft">Visão geral</p>
              <p className="text-sm font-semibold text-ink">Operação deste mês</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
              ● Ativa
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { v: "12", l: "Novos", c: "text-brand-600" },
              { v: "7", l: "Em negociação", c: "text-amber-600" },
              { v: "5", l: "Ganhos", c: "text-emerald-600" },
            ].map((k) => (
              <div key={k.l} className="rounded-xl border border-gray-100 p-3">
                <p className={`text-xl font-semibold ${k.c}`}>{k.v}</p>
                <p className="mt-0.5 text-[10px] text-ink-soft">{k.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-gray-100 p-4">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium text-ink-soft">
                Resultado acompanhado
              </p>
              <span className="text-[10px] font-semibold text-emerald-600">+18%</span>
            </div>
            <div className="mt-4 flex h-24 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="w-full flex-1 rounded-sm bg-gradient-to-t from-brand-500/70 to-accent-400/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-1.5 flex gap-1.5">
              {months.map((m, i) => (
                <span key={i} className="flex-1 text-center text-[8px] text-ink-soft/60">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
