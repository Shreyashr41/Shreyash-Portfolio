import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FiLock, FiUnlock, FiEdit2, FiTrash2, FiPlus, FiX, FiSave, FiImage, FiRefreshCw, FiUpload } from "react-icons/fi"

const DEFAULT_IMAGES = [
  { id: 1, label: "Project Dashboard", color: "bg-neo-coral-light", url: "/gallery/photo-1.svg" },
  { id: 2, label: "Team Hackathon", color: "bg-blue-50", url: "/gallery/photo-2.svg" },
  { id: 3, label: "Code Review", color: "bg-purple-50", url: "/gallery/photo-3.svg" },
  { id: 4, label: "Architecture Design", color: "bg-green-50", url: "/gallery/photo-4.svg" },
  { id: 5, label: "Community Event", color: "bg-amber-50", url: "/gallery/photo-5.svg" },
  { id: 6, label: "Tech Talk", color: "bg-pink-50", url: "/gallery/photo-6.svg" },
]

const COLORS = [
  { value: "bg-neo-coral-light", label: "Coral" },
  { value: "bg-blue-50", label: "Blue" },
  { value: "bg-purple-50", label: "Purple" },
  { value: "bg-green-50", label: "Green" },
  { value: "bg-amber-50", label: "Amber" },
  { value: "bg-pink-50", label: "Pink" },
  { value: "bg-gray-50", label: "Gray" },
]

let nextId = 7

export default function Gallery() {
  const [images, setImages] = useState(() => {
    try {
      const saved = localStorage.getItem("gallery-images")
      if (saved) {
        const parsed = JSON.parse(saved)
        const maxId = parsed.reduce((m, img) => Math.max(m, img.id || 0), 0)
        nextId = maxId + 1
        return parsed
      }
    } catch {}
    return DEFAULT_IMAGES
  })
  const [locked, setLocked] = useState(true)
  const [passwordInput, setPasswordInput] = useState("")
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [error, setError] = useState("")
  const [editing, setEditing] = useState(null)

  useEffect(() => {
    localStorage.setItem("gallery-images", JSON.stringify(images))
  }, [images])

  function handleUnlock(e) {
    e.preventDefault()
    if (passwordInput === "shreyash") {
      setLocked(false)
      setShowPasswordModal(false)
      setPasswordInput("")
      setError("")
    } else {
      setError("Wrong password")
    }
  }

  function handleLock() {
    setLocked(true)
    setEditing(null)
  }

  function openEditor(item) {
    setEditing({ ...item, previewError: false })
  }

  function saveEdit() {
    if (!editing) return
    setImages(prev => prev.map(img => img.id === editing.id ? editing : img))
    setEditing(null)
  }

  function deleteItem(id) {
    setImages(prev => prev.filter(img => img.id !== id))
    if (editing && editing.id === id)     setEditing(null)
  }

  function addItem() {
    const newItem = { id: nextId++, label: "New Photo", color: "bg-gray-50", url: "", broken: false }
    setImages(prev => [...prev, newItem])
    setEditing({ ...newItem, previewError: false })
  }

  function handleFileUpload(e) {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith("image/")) return alert("Please select an image file")
    if (file.size > 20 * 1024 * 1024) return alert("File too large (max 20MB)")
    const reader = new FileReader()
    reader.onload = () => {
      setEditing(prev => prev ? { ...prev, url: reader.result } : prev)
    }
    reader.readAsDataURL(file)
    e.target.value = ""
  }

  function resetToDefault() {
    nextId = 7
    setImages(DEFAULT_IMAGES)
    setEditing(null)
  }

  return (
    <section id="gallery" className="w-full py-24 px-4 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-neo-coral uppercase">Gallery</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-5xl sm:text-6xl font-black text-[#1c1917] leading-[0.95] tracking-tight font-display">
              Moments & Memories
            </h2>
            {locked ? (
              <button
                onClick={() => setShowPasswordModal(true)}
                className="flex items-center gap-2 px-3 py-2 border-2 border-gray-200 rounded-xl text-xs font-bold text-gray-400 hover:text-neo-coral hover:border-neo-coral/50 transition-all"
              >
                <FiLock size={14} /> Edit
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button onClick={addItem} className="flex items-center gap-2 px-3 py-2 border-2 border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:text-black hover:border-gray-400 transition-all">
                  <FiPlus size={14} /> Add
                </button>
                <button onClick={resetToDefault} className="flex items-center gap-2 px-3 py-2 border-2 border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:text-black hover:border-gray-400 transition-all">
                  <FiRefreshCw size={14} /> Reset
                </button>
                <button onClick={handleLock} className="flex items-center gap-2 px-3 py-2 border-2 border-black bg-neo-coral rounded-xl text-xs font-bold text-white hover:bg-neo-coral-dark transition-all">
                  <FiUnlock size={14} /> Done
                </button>
              </div>
            )}
          </div>
        </motion.div>

        <div className="columns-1 sm:columns-2 gap-5 space-y-5">
          {images.map((item, i) => {
            const heights = ["aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]"]
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`relative group break-inside-avoid ${heights[i % heights.length]} ${item.color} neo-border shadow-neo overflow-hidden hover:shadow-neo-sm hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150`}
              >
                {item.url && !item.broken ? (
                  <img src={item.url} alt={item.label} className="absolute inset-0 w-full h-full object-cover" onError={() => setImages(prev => prev.map(img => img.id === item.id ? { ...img, broken: true } : img))} />
                ) : item.url && item.broken ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <span className="text-xs font-bold text-gray-400">Broken image</span>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-black text-gray-300 font-display">{String(item.id).padStart(2, "0")}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-end p-4">
                  <span className="text-sm font-bold text-black bg-white neo-border px-3 py-1 translate-y-full hover:translate-y-0 transition-transform duration-300">
                    {item.label}
                  </span>
                </div>
                {!locked && (
                  <button
                    onClick={() => openEditor(item)}
                    className="absolute top-2 right-2 bg-white neo-border p-2 shadow-neo-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100 z-10"
                  >
                    <FiEdit2 size={14} className="text-gray-700" />
                  </button>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      {showPasswordModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/30 backdrop-blur-sm" onClick={() => setShowPasswordModal(false)}>
          <div className="bg-white neo-border shadow-neo p-8 w-full max-w-sm mx-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-black text-[#1c1917] font-display">Edit Gallery</h3>
              <button onClick={() => setShowPasswordModal(false)} className="text-gray-400 hover:text-black transition-colors"><FiX size={20} /></button>
            </div>
            <form onSubmit={handleUnlock}>
              <input type="password" value={passwordInput} onChange={e => { setPasswordInput(e.target.value); setError("") }} placeholder="Enter password" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 text-[#1c1917] text-sm placeholder-gray-400 focus:outline-none focus:border-neo-coral transition-colors mb-4" autoFocus />
              {error && <p className="text-red-500 text-xs font-semibold mb-4">{error}</p>}
              <button type="submit" className="w-full px-6 py-3 bg-neo-coral text-white font-black neo-border shadow-neo-sm text-sm uppercase tracking-wider hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">Unlock</button>
            </form>
          </div>
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/30 backdrop-blur-sm" onClick={() => setEditing(null)}>
          <div className="bg-white neo-border shadow-neo p-8 w-full max-w-lg mx-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-black text-[#1c1917] font-display">Edit Photo</h3>
              <button onClick={() => setEditing(null)} className="text-gray-400 hover:text-black transition-colors"><FiX size={20} /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Image URL</label>
                <div className="flex items-center gap-2">
                  <FiImage size={16} className="text-gray-300 shrink-0" />
                  <input type="text" value={editing.url} onChange={e => setEditing({ ...editing, url: e.target.value })} placeholder="https://example.com/photo.jpg" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 text-[#1c1917] text-sm placeholder-gray-400 focus:outline-none focus:border-neo-coral transition-colors" />
                </div>
                {editing.url && (
                  <div className="mt-3 aspect-video rounded-xl overflow-hidden border-2 border-gray-200 bg-gray-50">
                    <div className="w-full h-full relative">
                      {!editing.previewError ? (
                        <img src={editing.url} alt="preview" className="w-full h-full object-cover" onError={() => setEditing(prev => prev ? { ...prev, previewError: true } : prev)} onLoad={() => setEditing(prev => prev ? { ...prev, previewError: false } : prev)} />
                      ) : (
                        <div className="flex items-center justify-center h-full text-xs text-gray-400 font-medium">Invalid image URL</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Or upload from device</label>
                <label className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-sm text-gray-500 hover:border-neo-coral/50 hover:text-neo-coral transition-all cursor-pointer">
                  <FiUpload size={16} /> <span>Choose image (max 20MB)</span>
                  <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Label</label>
                <input type="text" value={editing.label} onChange={e => setEditing({ ...editing, label: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 text-[#1c1917] text-sm placeholder-gray-400 focus:outline-none focus:border-neo-coral transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Color</label>
                <div className="flex flex-wrap gap-2">
                  {COLORS.map(c => (
                    <button key={c.value} onClick={() => setEditing({ ...editing, color: c.value })} className={`w-8 h-8 rounded-lg ${c.value} border-2 ${editing.color === c.value ? "border-black scale-110" : "border-gray-200"} transition-all`} title={c.label} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-8 pt-4 border-t-2 border-gray-100">
              <button onClick={() => deleteItem(editing.id)} className="flex items-center gap-2 px-4 py-2 border-2 border-red-200 rounded-xl text-xs font-bold text-red-500 hover:bg-red-50 transition-all"><FiTrash2 size={14} /> Delete</button>
              <button onClick={saveEdit} className="flex items-center gap-2 px-6 py-3 bg-neo-coral text-white font-black neo-border shadow-neo-sm text-sm uppercase tracking-wider hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"><FiSave size={14} /> Save</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
