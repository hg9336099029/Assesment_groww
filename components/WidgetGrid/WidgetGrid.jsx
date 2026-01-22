import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay,
} from '@dnd-kit/core'
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    rectSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { openModal } from '@store/slices/uiSlice'
import { reorderWidgets } from '@store/slices/widgetsSlice'
import WidgetCard from '../WidgetCard/WidgetCard'

// Sortable Item Wrapper
function SortableWidget({ widget }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: widget.id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 10 : 1,
        opacity: isDragging ? 0.8 : 1,
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={widget.displayMode === 'table' ? 'md:col-span-2 lg:col-span-3' : ''}
        >
            <WidgetCard widget={widget} />
        </div>
    )
}

function WidgetGrid({ widgets }) {
    const dispatch = useDispatch()
    const [activeId, setActiveId] = useState(null)

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8, // Require 8px movement before drag starts to allow clicks
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    const handleDragStart = (event) => {
        setActiveId(event.active.id)
    }

    const handleDragEnd = (event) => {
        const { active, over } = event

        if (active.id !== over?.id) {
            const oldIndex = widgets.findIndex((w) => w.id === active.id)
            const newIndex = widgets.findIndex((w) => w.id === over?.id)

            if (oldIndex !== -1 && newIndex !== -1) {
                dispatch(reorderWidgets(arrayMove(widgets, oldIndex, newIndex)))
            }
        }

        setActiveId(null)
    }

    const handleAddWidget = () => {
        dispatch(openModal('addWidget'))
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn pb-10">
                <SortableContext
                    items={widgets.map(w => w.id)}
                    strategy={rectSortingStrategy}
                >
                    {widgets.map((widget) => (
                        <SortableWidget key={widget.id} widget={widget} />
                    ))}
                </SortableContext>

                {/* Add widget placeholder */}
                <div className="min-h-[300px] border-2 border-dashed border-dark-border rounded-xl flex items-center justify-center hover:border-primary/50 hover:bg-dark-card/50 transition-all duration-300 group cursor-pointer"
                    onClick={handleAddWidget}
                >
                    <div className="flex flex-col items-center gap-4 p-8 text-gray-500 hover:text-primary transition-colors duration-300">
                        <div className="w-16 h-16 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-3xl font-light group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                            +
                        </div>
                        <div className="text-center">
                            <span className="font-medium text-lg block mb-1 text-gray-300 group-hover:text-primary transition-colors">Add Widget</span>
                            <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors max-w-[200px]">
                                Connect to a finance API and create a custom widget
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <DragOverlay>
                {activeId ? (
                    <div className="opacity-80">
                        <WidgetCard widget={widgets.find(w => w.id === activeId)} />
                    </div>
                ) : null}
            </DragOverlay>
        </DndContext>
    )
}

export default WidgetGrid
