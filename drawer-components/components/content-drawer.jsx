"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { X, FileText, Clock, User, Tag, ChevronRight } from "lucide-react"

export function ContentDrawer({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedArticle, setSelectedArticle] = useState(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"

      // Simulate loading
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1500)

      return () => clearTimeout(timer)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  const articles = [
    {
      id: 1,
      title: "Getting Started with Modern Web Development",
      excerpt: "Learn the fundamentals of building modern web applications with the latest tools and frameworks.",
      author: "Sarah Johnson",
      readTime: "5 min read",
      category: "Development",
      tags: ["React", "JavaScript", "Web Dev"],
      publishedAt: "2 hours ago",
    },
    {
      id: 2,
      title: "Design Systems: Building Consistent User Interfaces",
      excerpt: "Explore how design systems help create cohesive and scalable user interface components.",
      author: "Mike Chen",
      readTime: "8 min read",
      category: "Design",
      tags: ["Design Systems", "UI/UX", "Components"],
      publishedAt: "1 day ago",
    },
    {
      id: 3,
      title: "The Future of Artificial Intelligence in Web Development",
      excerpt: "Discover how AI is transforming the way we build and interact with web applications.",
      author: "Alex Rivera",
      readTime: "12 min read",
      category: "Technology",
      tags: ["AI", "Machine Learning", "Future Tech"],
      publishedAt: "3 days ago",
    },
  ]

  const LoadingSkeleton = () => (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-4 border border-slate-200 rounded-lg">
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-3 w-full mb-2" />
          <Skeleton className="h-3 w-2/3 mb-3" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-20" />
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-blue-600" />
              <div>
                <h2 className="text-xl font-serif font-bold text-slate-800">Latest Articles</h2>
                <p className="text-sm text-slate-600">Discover new content</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {isLoading ? (
              <LoadingSkeleton />
            ) : (
              <div className="space-y-6">
                {articles.map((article) => (
                  <div
                    key={article.id}
                    className="group p-4 border border-slate-200 rounded-lg hover:border-blue-200 hover:shadow-md transition-all cursor-pointer"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>

                    <h3 className="font-serif font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">{article.excerpt}</p>

                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs bg-blue-100 text-blue-600">
                          {article.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                        <span>•</span>
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {article.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          <Tag className="w-2 h-2 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="text-xs text-slate-500">Published {article.publishedAt}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-slate-200 space-y-3">
            <Button variant="outline" className="w-full bg-transparent">
              View All Articles
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">Subscribe to Updates</Button>
          </div>
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 z-60 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif font-bold text-slate-800">Article Preview</h3>
              <Button variant="ghost" size="sm" onClick={() => setSelectedArticle(null)} className="h-8 w-8 p-0">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-3">
              <Badge variant="secondary">{selectedArticle.category}</Badge>
              <h4 className="font-medium text-slate-800">{selectedArticle.title}</h4>
              <p className="text-sm text-slate-600">{selectedArticle.excerpt}</p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>By {selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button variant="outline" className="flex-1 bg-transparent">
                Save for Later
              </Button>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Read Article</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
